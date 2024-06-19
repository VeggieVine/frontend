import Midtrans from "midtrans-client"
import { NextResponse } from "next/server"

let snap = new Midtrans.Snap({
    isProduction: false,
    serverKey: process.env.SECRET,
    clientKey: process.env.NEXT_PUBLIC_CLIENT_KEY,
})

export async function POST(request) {
    try {
        const { items, shippingAddress } = await request.json()

        const parsePrice = (price) => 
            typeof price === "string" 
                ? parseInt(price.replace(/\./g, ""), 10) 
                : price

        const item_details = items.map(item => ({
            id: item.id,
            price: parsePrice(item.product.price),
            quantity: item.quantity,
            name: item.product.name,
        }))

        const gross_amount = item_details.reduce((sum, item) => sum + item.price * item.quantity, 0)

        let parameter = {
            transaction_details: {
                order_id: `order-id-${Math.floor(1000000 + Math.random() * 9000000)}`,
                gross_amount: gross_amount,
            },
            item_details: item_details,
            customer_details: {
                first_name: shippingAddress.fullName.split(" ")[0],
                last_name: shippingAddress.fullName.split(" ").slice(1).join(" "),
                email: shippingAddress.email,
                phone: shippingAddress.phone,
                billing_address: {
                    first_name: shippingAddress.fullName.split(" ")[0],
                    last_name: shippingAddress.fullName.split(" ").slice(1).join(" "),
                    email: shippingAddress.email,
                    phone: shippingAddress.phone,
                    address: shippingAddress.address,
                    city: shippingAddress.city,
                },
                shipping_address: {
                    first_name: shippingAddress.fullName.split(" ")[0],
                    last_name: shippingAddress.fullName.split(" ").slice(1).join(" "),
                    email: shippingAddress.email,
                    phone: shippingAddress.phone,
                    address: shippingAddress.address,
                    city: shippingAddress.city,
                },
            },
        }

        const transaction = await snap.createTransaction(parameter)
        return NextResponse.json({ token: transaction.token })
    } catch (error) {
        console.error('Midtrans transaction error:', error)
        return NextResponse.json({ error: error.message })
    }
}
