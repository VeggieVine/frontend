import Image from 'next/image';

const Table = ({ data }) => {
  return (
    <div className='overflow-auto max-h-screen'>
      <table className='table table-md table-pin-rows table-pin-cols w-full'>
        <thead>
          <tr>
            <th>ID</th>
            <td>Nama Barang</td>
            <td>Keterangan</td>
            <td>Kategori</td>
            <td>Harga</td>
            <td>Stok</td>
            <td>Gambar</td>
            <td>Aksi</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <th>{item.id}</th>
              <td>{item.itemName}</td>
              <td>{item.description}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
              <td>{item.stock}</td>
              <td>
                <Image 
                  src={item.image} 
                  alt={item.itemName} 
                  width={100} 
                  height={100} 
                  className='object-cover' 
                />
              </td>
              <td>
                <button className='btn btn-sm btn-primary mr-4'>Edit</button>
                <button className='btn btn-sm btn-error'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
