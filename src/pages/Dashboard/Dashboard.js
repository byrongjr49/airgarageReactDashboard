import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Menu, Grid, Header, Image, Rail, Segment, Sticky, Button, Icon  } from 'semantic-ui-react'
import { Navbar, Footer } from '../index.js'
import './Dashboard.css';

const Placeholder = () => <Image src='/assets/images/wireframe/paragraph.png' />

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Santa',
      lastName: 'Claus',
      email: 'santaclaus@gmail.com',
      phone:'6024896418',
      activeItem: 'home'

    }
    }
    static propTypes = {
    color: PropTypes.string,
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleContextRef = contextRef => this.setState({ contextRef })


    render(){
        const { activeItem } = this.state
        const { contextRef } = this.state

        return(
          <div>
          <Navbar />

          <Grid left columns={1}>
        <Grid.Column>
          <div ref={this.handleContextRef}>
            <Segment>
              <Rail position='right'>

                <div className='cardView'>
                <label className= 'info'>{this.state.firstName} {this.state.lastName}'s Dashboard</label>
                <td className= 'info2'>{this.state.email}
                <Button basic color = 'Standard' icon><Icon name='write'/></Button></td>

                <label2 className= 'info2'>{this.state.phone}
                <Button content='Standard' basic icon><Icon name='write'/></Button></label2>
                </div>
              </Rail>
            </Segment>

              <Rail position='center'>
              <Sticky context={contextRef}>
              <Menu vertical>
              <Menu.Item Button icon='home' className='Tab' name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
              <Menu.Item Button icon='marker' className='Tab' name='Spots' active={activeItem === 'Spots'} onClick={this.handleItemClick} />
              <Menu.Item Button icon='users' className='Tab' name='Renters' active={activeItem === 'Renters'} onClick={this.handleItemClick} />
              <Menu.Item Button icon='money' className='Tab' name='Payouts' active={activeItem === 'Payouts'} onClick={this.handleItemClick} />
              <Menu.Item Button icon='car' className='Tab' name='Cars' active={activeItem === 'Cars'} onClick={this.handleItemClick} />
              <Menu.Item Button icon='credit card alternative' className='Tab' name='Billing' active={activeItem === 'Billing'} onClick={this.handleItemClick} />
              <Menu.Item Button icon='gift' className='Tab' name='Share AirGarage' active={activeItem === 'Share AirGarage'} onClick={this.handleItemClick} />
            </Menu>
          </Sticky>
        </Rail>
        

          </div>
        </Grid.Column>
      </Grid>
    </div>
        )
    }
}

export default Dashboard
