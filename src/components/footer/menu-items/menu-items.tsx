import { observer } from 'mobx-react-lite';
import { Link } from "react-router-dom";
import React from 'react';
import { FooterMenuWrapper, Item } from './menu-items.style';

export const FooterMenuItems = observer((): JSX.Element => {


    return (
        <FooterMenuWrapper>
            <Item> <Link to="/terms">Terms and conditions</Link></Item>
            <Item><Link to="/privacy-policy">Privacy Policy</Link></Item>
       </FooterMenuWrapper>
    );
});
