const Table = ({ data }) => {
    return (
        <div className="overflow-auto max-h-screen">
            <table className="table table-md table-pin-rows table-pin-cols w-full">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <td>Nama Pembeli</td>
                        <td>Tanggal</td>
                        <td>Item</td>
                        <td>Total Harga</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((order) => (
                        <tr key={order.orderId}>
                            <th>{order.orderId}</th>
                            <td>{order.username}</td>
                            <td>{order.date}</td>
                            <td>{order.item}</td>
                            <td>{order.totalPrice}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
