import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config"
import {Container, PostForm} from '../components'
import {useParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

function EditPost() {
    //we get thre slug from the url through the useParams hook
    const {slug} = useParams()
    const [post, setPost] = useState(null)
    const navigate=useNavigate()

    console.log("from edit post slug is ", slug, "and post is ", post)
    useEffect(() => {
        if(slug){
            console.log("from edit post", post)
            appwriteService.getPost(slug).then((post) => {
                console.log("from edit post", post)
                if(post){
                    setPost(post)
                }
            });
        }else{
            navigate('/')
        }
    }, [slug, navigate])

  return post?(
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
    ):null
}

export default EditPost