import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your item has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="flex justify-evenly">
        <h2 className="text-4xl">Items:{cart.length}</h2>
        <h2 className="text-4xl">Total Price:${totalPrice}</h2>
        {cart.length ? (
          <Link to="/dashboard/payment">
            <button className="btn btn-primary">Pay</button>
          </Link>
        ) : (
          <button disabled className="btn btn-primary">
            Pay
          </button>
        )}
      </div>
      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-100">
        <h2 className="mb-4 text-2xl font-semibold ">Invoices</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className="dark:bg-gray-700">
              <tr className="text-left">
                <th className="p-3">#</th>
                <th className="p-3">Image</th>
                <th className="p-3">Item</th>
                <th className="p-3 ">Price</th>
                <th className="p-3 text-right">Status</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr
                  key={item._id}
                  className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900"
                >
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3 avatar-group">
                    <img
                      src={item.image}
                      className="w-8 h-8 rounded-sm"
                      alt=""
                    />
                  </td>
                  <td className="p-3">
                    <p>{item.name}</p>
                  </td>
                  <td className="p-3">
                    <p>${item.price}</p>
                  </td>
                  <td className="p-3 text-right">
                    <span className="py-1 font-semibold rounded-md  dark:text-gray-900">
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-ghost"
                      >
                        <FaTrashAlt className="text-amber-400"></FaTrashAlt>
                      </button>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
