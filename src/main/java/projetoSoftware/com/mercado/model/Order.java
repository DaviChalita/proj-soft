package projetoSoftware.com.mercado.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @Column(name ="order_id")
    private Integer orderId;
    @Column(name = "customer_id")
    private Integer customerId;
    @Column(name = "order_date")
    private Date orderDate;
    @Column(name="status")
    private Integer status;
    @Column(name = "comments")
    private String comments;
    @Column(name = "shipped_date")
    private Date shippedDate;
    @Column(name = "shipper_id")
    private Integer shipperId;

    public Order() {
    }

    public Order(Integer orderId, Integer customerId, Integer status, String comments, Integer shipperId) {
        this.orderId = orderId;
        this.customerId = customerId;
        this.orderDate = new Date();
        this.status = status;
        this.comments = comments;
        this.shippedDate = new Date();
        this.shipperId = shipperId;
    }

    public Integer getOrderId() {
        return orderId;
    }

    public void setOrderId(Integer orderId) {
        this.orderId = orderId;
    }

    public Integer getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Integer customerId) {
        this.customerId = customerId;
    }

    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public Date getShippedDate() {
        return shippedDate;
    }

    public void setShippedDate(Date shippedDate) {
        this.shippedDate = shippedDate;
    }

    public Integer getShipperId() {
        return shipperId;
    }

    public void setShipperId(Integer shipperId) {
        this.shipperId = shipperId;
    }
}
