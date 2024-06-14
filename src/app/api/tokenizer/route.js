import Midtrans from "midtrans-client"
import { NextResponse } from "next/server"

let snap = new Midtrans.Snap({
    isProduction: false,
    serverKey: process.env.SECRET,
    clientKey: process.env.NEXT_PUBLIC_CLIENT_KEY,
})

export async function POST(request) {
    try {
        const { items } = await request.json()
        const parsePrice = (price) => 
          typeof price === "string" 
              ? parseInt(price.replace(/\./g, ""), 10) 
              : price

        const item_details = items.map(item => ({
            id: item.id,
            price: parsePrice(item.price),
            quantity: item.quantity,
            name: item.name,
        }))


        const gross_amount = item_details.reduce((sum, item) => {
          const itemTotal = parsePrice(item.price) * item.quantity
          return sum + itemTotal
        }, 0)
        
        let parameter = {
            transaction_details: {
                order_id: `order-id-${Math.floor(1000000 + Math.random() * 9000000)}`,
                gross_amount: gross_amount,
            },
            item_details: item_details,
            customer_details: {
                first_name: "John",
                last_name: "Doe",
                email: "john.doe@example.com",
                phone: "081234567890",
            },
        }

        const transaction = await snap.createTransaction(parameter)
        return NextResponse.json({ token: transaction.token })
    } catch (error) {
        console.error('Midtrans transaction error:', error)
        return NextResponse.json({ error: error.message })
    }
}
