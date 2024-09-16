import axios from 'axios';
//tất cả đều dùng thư viện axios để truy cập các phương thức của http

const API_URL = 'http://localhost:8000/cart'; 

//sử dụng async thay cho promise
//lấy dữ liệu từ giỏ hàng
export const getCartItems = async () => {
  try {
    const response = await axios.get(API_URL);    //await đợi đến khi response được return mới thực hiện tiếp, (giống return 1 promise)
    return response.data;
  } catch (error) {
    console.error('Failed to fetch cart items:', error);
  }
};

//Thêm vào giỏ hàng
export const addToCart = async (product) => {
  try {
    const response = await axios.post(API_URL, product);
    return response.data;
  } catch (error) {
    console.error('Failed to add to cart:', error);
  }
};

//sửa số lượng
export const updateCartItem = async (productId, quantity) => {
  try {
    const response = await axios.put(`${API_URL}/${productId}`, { quantity });
    return response.data;
  } catch (error) {
    console.error('Failed to update cart item:', error);
  }
};

//xóa sản phẩm
export const removeFromCart = async (productId) => {
  try {
    const response = await axios.delete(`${API_URL}/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to remove cart item:', error);
  }
};

//clear giỏ hàng
export const clearCart = async () => {
  try {
    const response = await axios.delete(API_URL);
    return response.data;
  } catch (error) {
    console.error('Failed to clear cart:', error);
  }
};

