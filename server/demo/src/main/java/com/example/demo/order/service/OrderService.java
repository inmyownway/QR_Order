package com.example.demo.order.service;

import com.example.demo.category.entity.Category;
import com.example.demo.menu.entity.Menu;
import com.example.demo.menu.repository.MenuRepository;
import com.example.demo.order.entity.Order;
import com.example.demo.order.entity.OrderMenu;
import com.example.demo.order.repository.OrderMenuRepository;
import com.example.demo.order.repository.OrderRepository;
import com.example.demo.table.entity.Table;
import com.example.demo.table.repository.TableRepository;
import com.example.demo.user.entity.User;
import com.example.demo.user.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class OrderService {

    private final TableRepository tableRepository;
    private final MenuRepository menuRepository;
    private final OrderRepository orderRepository;
    private final UserRepository userRepository;
    private final OrderMenuRepository orderMenuRepository;

    public Order createOrder(Order order, Long userId) {
        Optional<User> user = userRepository.findById(userId);
        List<Table> tableList = tableRepository.findAllByUser(user.get())
                .stream().filter(table -> table.getTableNumber() == order.getTable().getTableNumber())
                .collect(Collectors.toList());
        order.setTable(tableList.get(0));

        for(int i = 0; i < order.getOrderMenuList().size(); i++) {
            Optional<Menu> menu = menuRepository.findById(order.getOrderMenuList().get(i).getMenu().getMenuId());
            if(menu.isPresent()) {
                order.getOrderMenuList().get(i).setMenu(menu.get());
            }
        }
        return orderRepository.save(order);
    }

    public void deleteOrder(Long userId, int tableNumber) {
        Optional<User> user = userRepository.findById(userId);
        List<Table> tableList = tableRepository.findAllByUser(user.get())
                .stream().filter(table -> table.getTableNumber() == tableNumber)
                .collect(Collectors.toList());
        List<Order> orderList = orderRepository.findAllByTable(tableList.get(0));
        for(int i = 0; i < orderList.size(); i++) {
            orderRepository.delete(orderList.get(i));
        }
    }
}
