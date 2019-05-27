import React, { Component } from 'react';
import './ProductTabs.scss';

class ProductTabs extends Component {
  state = {
    tabs: [
      {title: 'Details', content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet ipsum a nisl tempor scelerisque ac a nisl. Phasellus quam massa, vestibulum vel lacus et, tristique sodales sapien. Suspendisse tristique vehicula luctus. Sed fermentum mauris nec elementum dictum. Maecenas aliquam elit odio, ut malesuada sem lobortis eget. Sed in lectus tincidunt, aliquet lorem ac, interdum nunc. Sed fringilla convallis ullamcorper. Suspendisse et nunc id orci suscipit elementum at quis purus. Quisque sit amet nunc et lorem consectetur pulvinar. Suspendisse lobortis lacinia vestibulum. Proin sem massa, pellentesque ut placerat sit amet, fringilla eu ipsum. Praesent dolor odio, condimentum nec ornare id, hendrerit eu velit.</p>'},
      {title: 'Specifications', content: '<p>Mauris vulputate ante quam, nec eleifend mi dignissim ac. Sed lobortis neque in elit commodo pellentesque. Cras quis mollis odio, eu facilisis sem. Maecenas consequat nulla dolor, nec vehicula tortor consectetur sed. Aenean lacinia pellentesque dui, quis pharetra orci pharetra nec. Proin molestie odio arcu, et gravida eros sollicitudin eget. Fusce maximus tempus tempus. Curabitur at faucibus nunc, eu volutpat leo. In maximus varius purus quis gravida. Pellentesque sagittis sit amet orci ac venenatis. Sed rhoncus semper ligula, vitae pellentesque ex egestas in. Duis leo mauris, tempus id felis sed, laoreet lobortis eros. Sed eget metus dapibus, venenatis quam sed, volutpat erat. Ut finibus, massa id faucibus faucibus, nibh orci ultrices diam, non sodales nunc tellus at erat.</p>'},
      {title: 'Reviews', content: '<p>Nulla porttitor mi et ipsum lacinia semper. Cras tristique enim tincidunt felis varius euismod. Praesent aliquam feugiat lacus, in luctus est consectetur in. Aenean vestibulum iaculis nulla, sit amet condimentum risus finibus et. Sed et nibh a leo tempor porta. Quisque consectetur, justo id vehicula pellentesque, diam elit fermentum sem, a pretium odio enim sit amet sapien. Pellentesque interdum risus in fringilla dictum. Aenean quam lacus, euismod vitae tellus a, gravida rutrum arcu. Suspendisse in arcu vitae neque vestibulum fringilla. Donec congue odio ut accumsan pretium. Curabitur sit amet ante a magna blandit pharetra id sagittis nisi.</p>'},
      {title: 'Questions & Answers', content: '<p>Fusce sodales luctus quam in euismod. Aliquam erat volutpat. Nulla feugiat, lorem sed tincidunt convallis, magna mauris consectetur sem, eu cursus metus eros id lacus. Sed aliquam sodales massa, at tincidunt dui dignissim eget. Nunc vulputate justo a ultrices tincidunt. In non malesuada magna. Proin non egestas arcu, eu facilisis elit. Nulla porta, dui et bibendum gravida, diam eros pellentesque nulla, sed pretium mi turpis eget felis. Proin condimentum aliquam nibh, eget consequat metus.</p>'}
    ],
    activeTab: 0,
  }
  render() {
    return (
      <div className="product-tabs">
        <ul className="tab-titles">
        {
          this.state.tabs.map((tab, index) => {
            return (
              <li
                className={this.state.activeTab === index ? `active` : null}
                onClick={() => {this.setTab(index)}}
              >
                <span>{ tab.title }</span>
              </li>
            )
          })
        }
        </ul>
        {
          <div
            className="tab-content"
            dangerouslySetInnerHTML={{__html: this.state.tabs[this.state.activeTab].content}}
          >
          </div>
        }
      </div>
    );
  }
  setTab(index) {
     this.setState({activeTab: index});
  }
}

export default ProductTabs;
