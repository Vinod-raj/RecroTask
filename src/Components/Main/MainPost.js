import React, {useState, useEffect} from 'react'
import Cards from '../Cards/Cards'
import './MainPost.css'
import { fetchPosts } from '../../Redux/Posts/postActions'
import { connect } from 'react-redux'

function MainPost({data, fetchPosts}) {
    const {loading, posts, error, page} = data

    window.onscroll = () =>{  
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
                fetchPosts(page)   
        }
    }

    useEffect(()=> {
        fetchPosts(page);
    },[])


    return (
    
        <div className="main-container">
            { loading? <div>Loading....</div> : null }
            {
                posts.map(post => 
                    <Cards 
                        id={post.id} 
                        title={post.title} 
                        body={post.title} 
                    />)

            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPosts: (page) => dispatch(fetchPosts(page))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainPost)
