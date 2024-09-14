import React,{useCallback, useEffect} from 'react'
//useCallback is a hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed
import {set, useForm} from 'react-hook-form'
import {Button,Input, Select, RTE} from '../index'
import appwriteService from "../../appwrite/config";
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'



function PostForm({post}) {
    //if you want to monitor a field continuously, you can use watch
    //to set in any form we use setValue
    //we write control to get the control of the form, and we pass this control to the Controller component(here RTE)
    const {register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || 'active'
        }
    })
    watch()

    const navigate = useNavigate()
    const userData= useSelector(state=>state.auth.userData)
    const slugTransform=useCallback((value)=>{
        if(value && typeof value === 'string'){
            return value.trim().toLowerCase().replace(/[^a-zA-Z\d\s]+/g,'-')
            //this regex means that we are replacing all the characters that are not alphabets or digits with a hyphen
            .replace(/\s+/g,'-')
        } 
        return ''
    },[])
    useEffect(()=>{
        //we build this subscription because we want to watch the title field
        const subscription=watch((value, {name})=>{
            // console.log(value, "SlugTransform");
            if(name==='title'){
                setValue('slug',slugTransform(value.title),{shouldValidate: true})
                //we apply shouldValidate to true because we want to validate the slug field
            }
        })
        return () => subscription.unsubscribe() 
    },[watch,slugTransform, setValue])
    //this useEffect will run everytime when the watch changes(we will apply watch to multiple fields)
    const submit=async(data)=>{
        if(post){
            const file=data.image[0] ? await appwriteService.uploadFile(data.image[0]): null
            console.log("file is", file)
            if(file){
                appwriteService.deleteFile(post.featuredImage)
            }
            const dbPost=await appwriteService.updatePost(post.$id,{
                ...data,
                //we are overwriting the featuredImage with the new file id because we are updating the post
                featuredImage: file ? file.$id : undefined
            })
            if(dbPost){
                navigate(`/post/${dbPost.$id}`)
            }
        }else{
            const file=await appwriteService.uploadFile(data.image[0])
            // console.log("userdata is ", userData)
            if (file) {
                const fileId = file.$id;
                // console.log(file, fileId)
                data.featuredImage = fileId;
                const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    }
    
    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                    <Input
                        label="Title :"
                        placeholder="Title"
                        className="mb-4"
                        {...register("title", { required: true })}
                        />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                        
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full" Children={post ? "Update" : "Submit"}>
                    {post ? "Update" : "Submit" }
                </Button>
            </div>
        </form>
    );
}

export default PostForm