import React from 'react';
import styled from 'styled-components';
import {i18nInstance} from '@modules/i18next';
import classNames from "classnames";
import {withI18next} from '@hoc/withI18next';


class NavLang extends React.PureComponent {

    render() {
        const {i18n} = {...this.props};
        const checkLang = {
            zhtw : i18n.language === 'zh-tw' ? 'btn-info' : 'btn-outline-info',
            zhcn : i18n.language === 'zh-cn' ? 'btn-info' : 'btn-outline-info',
            enus : i18n.language === 'en-us' ? 'btn-info' : 'btn-outline-info'
        };

        return (
            <nav className="text-middle">
                <ButtonMenu key={1} className={classNames('btn', checkLang.zhtw)}
                            onClick={() => i18nInstance.changeLanguage('zh-tw')}>
                    繁中
                </ButtonMenu>
                <ButtonMenu key={2} className={classNames('btn', checkLang.zhcn)}
                            onClick={() => i18nInstance.changeLanguage('zh-cn')}>
                    简中
                </ButtonMenu>
                <ButtonMenu key={3} className={classNames('btn', checkLang.enus)}
                            onClick={() => i18nInstance.changeLanguage('en-us')}>
                    EN
                </ButtonMenu>
            </nav>
        );
    }
}

export default withI18next()(NavLang);

const ButtonMenu = styled.button`
  margin-left: 5px;
`
