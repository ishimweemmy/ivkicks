import YoumayLikes from "../components/Global/YoumayLikes";
import CartItem from "../components/cart/CartItem";

const Cart = () => {
  return (
    <div className="w-full h-fit py-4 flex flex-col items-center justify-center gap-2 bg-white">
      <div className="w-full h-fit flex flex-col items-center justify-center gap-3">
        <div className="w-full h-fit flex flex-col items-center gap-2">
          <span className="text-[rgb(10,8,58)] text-2xl font-bold 2xl:text-4xl block">
            Shopping Cart
          </span>
          <span className="text-sm font-bold text-slate-500 2xl:text-lg">
            Total: 2 items
          </span>
        </div>
        <div className="w-full h-fit py-2 px-2 flex flex-col items-center justify-center gap-6">
          <CartItem />
          <CartItem />
        </div>
      </div>
      <YoumayLikes />
    </div>
  );
};

export default Cart;
