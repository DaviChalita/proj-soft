package projetoSoftware.com.mercado.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import projetoSoftware.com.mercado.model.Order;
import projetoSoftware.com.mercado.service.OrderService;

import java.util.List;



    @RestController
    @RequestMapping("/order")
    public class OrderController {

        @Autowired
        OrderService orderService;

        @RequestMapping(path = "/all", method = RequestMethod.GET)
        public ResponseEntity<?> listOrders(){

            List<Order> orders = orderService.listOrders();
            return  new ResponseEntity<>(orders, HttpStatus.OK);
        }

        @RequestMapping(path = "/get_one/{order_id}", method = RequestMethod.GET)
        public ResponseEntity<?> getOrderById(
                @PathVariable int order_id
        ){
            Order order = orderService.getOrderById(order_id);
            return new ResponseEntity<>(order, HttpStatus.OK);
        }


        @RequestMapping(path = "/get_one/customer/{customer_id}", method = RequestMethod.GET)
        public ResponseEntity<?> getOrderByCustomerId(
                @PathVariable int customer_id
        ){
            List<Order> order = orderService.getOrderByCustomerId(customer_id);
            return new ResponseEntity<>(order, HttpStatus.OK);
        }

        @RequestMapping(path = "/get_one/status/{status}", method = RequestMethod.GET)
        public ResponseEntity<?> getOrderByStatus(
                @PathVariable int status
        ){
            List<Order> order = orderService.getOrderByStatus(status);
            return new ResponseEntity<>(order, HttpStatus.OK);
        }
//
        @PostMapping(path = "/create")
        public ResponseEntity<?> createOrder(
                @RequestBody Order newOrder
        ){
            orderService.createOrder(newOrder);
            return new ResponseEntity<>("{\"Message\": \"Created.\"}", HttpStatus.CREATED);
        }
//
//        @PostMapping(path = "/update/{order_id}")
//        public ResponseEntity<?> updateOrderById(
//                @RequestBody Order updatedOrder,
//                @PathVariable Integer order_id
//        ){
//            orderService.updateOrder(order_id, updatedOrder);
//            return new ResponseEntity<>("{\"Message\": \"Updated.\"}", HttpStatus.OK);
//        }
//
//        @DeleteMapping(path = "/delete/{order_id}")
//        public ResponseEntity<?> deleteOrderById(
//                @PathVariable int order_id
//        ){
//            orderService.deleteOrder(order_id);
//            return new ResponseEntity<>("{\"Message\": \"Deleted.\"}", HttpStatus.OK);
//
//        }

    }
