'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  ActivityIndicatorIOS,
  View,
  Component,
  NavigatorIOS,
  TouchableHighlight,
  ListView,
  Modal,
  Platform,
  StatusBarIOS
} = React;
var EventCell = require('./eventcell');
var dataSet = require('../../sample/sample.json');
var EventOverview = require('./eventoverview');
var EventPopup = require('./eventpopup');


var ModalExample = React.createClass({

  getInitialState()
  {
    return {
      animated: true,
      modalVisible: false,
      transparent: false,
    };
  },
  _setModalVisible(visible) {
    this.setState({modalVisible: visible});
  },

  render()
  {
    <View>
    <Modal visible={this.state.visible} transparent={this.state.transparent} animated={this.state.animated}>
      <TouchableHighlight onPress={() => {this._setModalVisible.bind(this, false)}}>Close</TouchableHighlight>
    </Modal>
    </View>
  }

});

class Loaded extends Component
{
  constructor(props) {
    super(props);
    console.log("building this out now");
    var dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      isLoading: false,
      showingModal: true,
      dataSource: dataSource.cloneWithRows(dataSet)
    };
    //This is manually binding so that when I return something within a closure in the binds
    //
    this.renderRow = this.renderRow.bind(this);
  }
 
  componentDidMount(){
    StatusBarIOS.setStyle('light-content', true);
    console.log("Component has now mounted");
  }
  // componentDidMount() {
  //   console.log("Component displayed");
  // }

  getDataSource(events) {
    return this.state.dataSource.cloneWithRows(events);
  }

  selectEvent(userEvent) {
    console.log("I click event now");
    console.log(userEvent);
  }

  renderFooter(){
    return <ActivityIndicatorIOS style={styles.scrollSpinner} />;
  }

  noOperation(){

  }

  renderSeparator(sectionID, rowID, adjacentRowHiglighted)
  {
    var style = styles.rowSeparator;
    if(adjacentRowHiglighted)
    {
              style = [style, styles.rowSeparatorHide];

    }
    return (
      <View key={'SEP_' + sectionID + '_' + rowID}  style={style}/>
    );

  }

  loadEvent(userEvent){
    this.props.navigator.push({
      title: "Event",
      component: EventOverview,
      passProps: {event: userEvent},
      backButtonTitle: "back",
    });

    // console.log("kill me I wish I was dead");
    // console.log(userEvent);
  }

  renderRow(event, sectionID, rowID, highlightRowFunc)
  {
     
    return (
        <EventCell
          key={event.id}
          //This is why render row is bound locally
          onSelect={() => this.loadEvent(event)}
          onHighlight={() => this.noOperation}
          onUnhighlight={() => this.noOperation}
          event={event} />
      )
  }

  popOverView()
  {
    if(this.state.showingModal == true){
    return (
        <EventPopup />
      )
      }else{
    return (
        <View />)
    }
  }

  render(){
    var content = <ListView
      ref="listview"
      renderSeparator={this.renderSeparator}
      dataSource={this.state.dataSource}
      renderFooter={this.renderFooter}
      renderRow={this.renderRow}
      onEndReached={console.log('End reached')}
      automaticallyAdjustContentInsets={false}
      keyboardDismissMode="on-drag"
      showsVerticalScrollIndicator={true}/>;
      
      return (
        <View style={styles.container}>
        <View style={styles.separator} />
        {content}
        {this.popOverView()}
        
        </View>
        );

  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  centerText: {
    alignItems: 'center',
  },
  noMoviesText: {
    marginTop: 80,
    color: '#888888',
  },
  separator: {
    height: 1,
    backgroundColor: '#eeeeee',
  },
  scrollSpinner: {
    marginVertical: 20,
  },
  rowSeparator: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    height: 1,
    marginLeft: 4,
  },
  rowSeparatorHide: {
    opacity: 0.0,
  },
});

module.exports = Loaded;
