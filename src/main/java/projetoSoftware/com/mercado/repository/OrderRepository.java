package projetoSoftware.com.mercado.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import projetoSoftware.com.mercado.model.Order;

import java.util.List;


public interface OrderRepository extends JpaRepository<Order, Integer> {



    List<Order> findByCustomerId(Integer customer_id);

    List<Order> findByStatus(Integer status);

    Order save(Order order);

//    public void createOrder(String CREATE_ORDER_QUERY, Order order){
//
//    }
//
//    public void updateOrder(String UPDATE_ORDER_QUERY, Order order, Integer order_id){
//
//    }
//
//    public void deleteOrder(String DELETE_ORDER_QUERY, int order_id) {
//    }
}