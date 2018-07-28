import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as HelloActions from '../../redux/actions/Hello';

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.data.helloName}</Text>
                <Button title="Change text" onPress={()=>{
                    this.props.helloActions.sayHelloAction("New Name");
                }} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const mapStateToProps = (state, props) =>({
    data: state.Hello
})

const mapDistpachToProps = (distpatch) =>  ({
   helloActions: bindActionCreators(HelloActions, distpatch)
});

export default connect(mapStateToProps, mapDistpachToProps)(Home);