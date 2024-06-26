import React from 'react'
import { recentOrderData } from '../Lib/Constant/tableData'
import { Link } from 'react-router-dom'
import { getOrderStatus } from '../Lib/Utilis/get-order-status'

const RecentOrders = () => {
    return (
        <div className="bg-white px-4 pt-3 pb-4 rounded border border-gray-200 flex-1 ">
            <strong className="text-gray-700 font-medium">Recent Orders</strong>
            <div className="mt-3 ">
                <table className="w-full text-gray-700 border-x border-gray-200 rounded-sm">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Product Id</td>
                            <td>Customer Name</td>
                            <td>Order Date</td>
                            <td>Order Total</td>
                            <td>Shipping Address</td>
                            <td>Order Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {recentOrderData.map((order) => {
                            return (
                                <tr key={order.id}>
                                    <td><Link to={`/product/${order.id}`}>{order.id}</Link></td>
                                    <td><Link to={`/product/${order.product_id}`}>{order.product_id}</Link></td>
                                    <td><Link to={`/product/${order.customer_name}`}>{order.customer_name}</Link></td>
                                    <td>{new Date(order.order_date).toLocaleDateString()}</td>
                                    <td>{order.order_total}</td>
                                    <td>{order.shipment_address}</td>
                                    <td>{getOrderStatus(order.current_order_status)}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RecentOrders
