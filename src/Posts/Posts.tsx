import React, { Fragment, useCallback, useState } from 'react'
import Grid from '@material-ui/core/Grid'

import Post from '../Post'
import PostDialog from './PostDialog'
import posts, { IPost, placeholder } from '../Content'

export default function Posts() {
  const [open, setOpen] = useState(false)
  const [opendPost, setOpendPost] = useState<IPost>(placeholder)

  const onOpen = useCallback(id => {
    const selected = posts.find(post => post.id === id)
    if (!selected) return

    setOpendPost(selected)
    setOpen(true)
  }, [])

  const handleClose = useCallback(() => setOpen(false), [])

  return (
    <Fragment>
      <Grid container spacing={2} justify='center'>
        {posts.map(post => (
          <Grid item key={post.id} lg={4} md={4} sm={6} xs={12}>
            <Post {...post} onOpenDescription={onOpen}></Post>
          </Grid>
        ))}
      </Grid>

      <PostDialog handleClose={handleClose} {...opendPost} open={open}></PostDialog>
    </Fragment>
  )
}
