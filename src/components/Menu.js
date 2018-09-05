import React, { Component } from 'react';
import StorageComponent from './Storage';

import files from '../images/menu/files.png';
import photos from '../images/menu/photos.png';
import sharing from '../images/menu/sharing.png';
import links from '../images/menu/links.png';
import events from '../images/menu/events.png';

import carousel from '../images/menu/carousel.png';
import mailbox from '../images/menu/mailbox.png';

import design from '../images/menu/design.png';
import web from '../images/menu/web.png';
import mobile from '../images/menu/mobile.png';
import application from '../images/menu/application.png';
import ui from '../images/menu/ui.png';


class Menu extends Component {

  state = {
    activeTab: 'Main'
  }

  changeActiveTab = tabName => {
    this.setState({
      activeTab: tabName
    })
  }

  render() {

    const {activeTab} = this.state; 

    return (
      <aside className="menu">
        <div>
          <h3 onClick={() => this.changeActiveTab('Main')} className="menu__title">Main</h3>
          <nav className={`menu__section ${activeTab === 'Main' ? 'active' : ''}`}>
            <a className="menu__item" >
              <img src={files} alt="Files" />
              Files
            </a>
            <a className="menu__item" >
              <img src={photos} alt="Photos" />
              Photos
            </a>
            <a className="menu__item" >
              <img src={sharing} alt="Sharing" />
              Sharing
            </a>
            <a className="menu__item" >
              <img src={links} alt="Links" />
              Links
            </a>
            <a className="menu__item" >
              <img src={events} alt="Events" />
              Events
            </a>
          </nav>
          <h3 onClick={() => this.changeActiveTab('Lables')} className="menu__title">Lables</h3>
          <nav className={`menu__section ${activeTab === 'Lables' ? 'active' : ''}`}>
            <a className="menu__item" >
              <img src={design} alt="Design" />
              Design
            </a>
            <a className="menu__item" >
              <img src={web} alt="Web Elements" />
              Web Elements
            </a>
            <a className="menu__item" >
              <img src={mobile} alt="Mobile" />
              Mobile
            </a>
            <a className="menu__item" >
              <img src={application} alt="Application" />
              Application
            </a>
            <a className="menu__item" >
              <img src={ui} alt="UI/UX" />
              UI/UX
            </a>
          </nav>
          <h3 onClick={() => this.changeActiveTab('Also from Dropbox')} className="menu__title">Also from Dropbox</h3>
          <nav className={`menu__section ${activeTab === 'Also from Dropbox' ? 'active' : ''}`}>
            <a className="menu__item" >
              <img src={carousel} alt="Carousel" />
              Carousel
            </a>
            <a className="menu__item" >
              <img src={mailbox} alt="Mailbox" />
              Mailbox
            </a>
          </nav>
        </div>
        <StorageComponent />
      </aside>
    );
  }
}

export default Menu;