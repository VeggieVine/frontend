import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full h-[260px] p-12 text-white bg-primary">
      <div className="container">
        <div className="flex justify-between">
          <div className="text-left">
            <h5 className="mb-4 text-xl font-bold">Contact</h5>
            <ul>
              <li><span className="font-semibold">Address: </span>Jakarta</li>
              <li><span className="font-semibold">Phone: </span>08514444444</li>
              <li><span className="font-semibold">Hours: </span>08.00-18.00</li>
            </ul>
          </div>
          <div className="text-left">
            <h5 className="mb-4 text-xl font-bold">Kategori Populer</h5>
            <ul>
              <li>Sayur - mayur</li>
              <li>Buah - buahan</li>
            </ul>
          </div>
          <div className="text-left">
            <h5 className="mb-4 text-xl font-bold">My Account</h5>
            <ul >
              <li>Sign In</li>
              <li>View Cart</li>
              <li>My Wishlist</li>
            </ul>
          </div>
          <div className="text-left">
            <h5 className="mb-4 text-xl font-bold">Secured Payment Gateway</h5>
            <ul>
              <li>Pembayaran aman dan terpercaya.</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}