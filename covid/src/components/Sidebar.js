import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";


class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          activePath: props.location.pathname,
          items: [
            {
              path: "/help-line",
              name: "HelpLine",
              css: "fas fa-hands-helping",
              key: 2,
              //   url: "http://localhost:9090/help-line/",
            },
            {
              path: "/advises",
              name: "Notifi cation",
              css: "fas fa-bell",
              key: 3,
              //   url: "http://localhost:9090/advises/",
            },
            {
              path: "/hospital-beds",
              name: "Hospital Beds",
              css: "fas fa-hospital-alt",
              key: 4,
              //   url: "http://localhost:9090/hospital-beds"/",
            },

            {
              path: "/college-beds",
              name: "Medical Colleges",
              css: "fas fa-procedures",
              key: 5,
            //   url: "http://localhost:9090/college-beds/",
            },
            {
              path: "/charts",
              name: "Stats Chart",
              css: "fas fa-chart-line",
              key: 6,
            //   url: "http://localhost:9090/charts/",
            },
          ],
        };
    }

    onItemClick = (path ,url) => {
        this.setState({ activePath: path });
    }

    render() {
        const { items, activePath } = this.state;
        return(
           <div id='sidebar'>
                { items.map((item) => {
                        return (
                            <NavItem 
                                path={item.path}
                                name={item.name}
                                css={item.css}
                                onItemClick={this.onItemClick}
                                active={item.path === activePath}
                                key={item.key}
                            ></NavItem>
                        );
                    })
                }</div>
           
        );
    }
}

const RouterSideNav = withRouter(SideNav);

const StyledNavItem = styled.div`
    height: 70px;
    width: 75px; /* width must be same size as NavBar to center */
    text-align: center; /* Aligns <a> inside of NavIcon div */
    margin-bottom: 0;   /* Puts space between NavItems */
    a {
        font-size: 2.7em;
        color: ${(props) => props.active ? "white" : "#9FFFCB"};
        :hover {
            opacity: 0.7;
            text-decoration: none; /* Gets rid of underlining of icons */
        }  
    }
`;

class NavItem extends React.Component {
    handleClick = () => {
        const { url,path, onItemClick } = this.props;
        onItemClick(path,url);
    }

    render() {
        const { active } = this.props;
        return(
            <StyledNavItem active={active}>
                <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
                    <NavIcon style={{width:'6%',fontSize:'16px'}} altText={this.props.name}></NavIcon>
                </Link>
            </StyledNavItem>
        );
    }
}

const NavIcon = styled.div`

`;

export default class Sidebar extends React.Component {
    render() {
        return (
            <RouterSideNav></RouterSideNav>
        );
    }
}