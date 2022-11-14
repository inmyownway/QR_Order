import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import BellIcon from './../../assets/img/bell_icon.png'
import IconTable from './../../assets/img/icon_table.png'
import IconMenu from './../../assets/img/icon_menu.png'
import IconPlus from './../../assets/img/icon_plus.png'
import IconQR from './../../assets/img/icon_QR.png'
import * as S from './Gnb.style'

const Gnb = () => {
    return (
        <S.GnbContainer>
            <S.GnbList>
                <S.TopLi>
                    <NavLink>
                        <div>
                            <S.Bell on={true}><span>1</span><img src={BellIcon} alt='벨알람' /></S.Bell>
                            매장알람
                        </div>
                    </NavLink>

                </S.TopLi>
                <S.Li>
                    <NavLink to='table'>
                        <S.TableImg src={IconTable} alt='table icon' />
                        테이블 현황
                    </NavLink>
                </S.Li>
                <S.Li>
                    <NavLink to='table'>
                        <S.MenuImg src={IconMenu} alt='menu icon' />
                        메뉴 목록
                    </NavLink>
                </S.Li>
                <S.Li>
                    <NavLink to='table'>
                        <S.PlusImg src={IconPlus} alt='plus icon' />
                        메뉴판 제작
                    </NavLink>
                </S.Li>
                <S.Li>
                    <NavLink to='table'>
                        <S.QrImg src={IconQR} alt='qr icon' />
                        QR Table
                    </NavLink>
                </S.Li>
            </S.GnbList>

        </S.GnbContainer>
    );
};

export default Gnb;