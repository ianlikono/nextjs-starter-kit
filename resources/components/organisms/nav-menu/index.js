import React from 'react';
import styled from 'styled-components';
import Link from '@components/atoms/link';
import {withI18next} from '@hoc/withI18next';


class NavMenu extends React.PureComponent {
    render() {
        const {t} = {...this.props};

        return (
            <nav className="text-middle">
                <Link route="home">
                    <MenuLink href="javascript:;">{t('menu.home')}</MenuLink>
                </Link>
                <span> | </span>
                <Link activeClassName="active" route="news">
                    <MenuLink href="javascript:;">{t('menu.news')}</MenuLink>
                </Link>
            </nav>
        );
    }
}

export default withI18next()(NavMenu);

const MenuLink = styled.a`
  color: #fff;
  
  &.active{
    color: #e00025;
  }
`

