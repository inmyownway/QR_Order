package com.example.demo.menu.dto;

import com.example.demo.menu.entity.Menu;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
//@AllArgsConstructor
public class MenuResponseDto {
    private long menuId;
    private Menu.MenuStatus menuStatus;
    private String menuName;
    private String menuContent;
    private int price;
    private int vote;
    private long categoryId;
}
