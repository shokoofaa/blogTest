import React from 'react'
import  withHeader from '../HOC/WithHeader'
import withFooter from '../HOC/WithFooter'

function PostList(WrapperComponent) {
    return function(props){
        return(
            <>
            <h2>There is the List Of Posts</h2>
            <text>........</text>
            <WrapperComponent {...props} />
            </>
        )
    }   
}
//export default withHeader(PostList)
export default withHeader(PostList(withFooter))