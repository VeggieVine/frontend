const Table = ({ data }) => {
    return (
        <div className="overflow-auto max-h-screen">
            <table className="table table-md table-pin-rows table-pin-cols w-full">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <td>Nama Pembeli</td>
                        <td>Tanggal</td>
                        <td>Total Pembayaran</td>
                        <td>Status Pembayaran</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((invoice) => (
                        <tr key={invoice.orderId}>
                            <th>{invoice.orderId}</th>
                            <td>{invoice.username}</td>
                            <td>{invoice.date}</td>
                            <td>{invoice.totalPayment}</td>
                            <td>{invoice.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
