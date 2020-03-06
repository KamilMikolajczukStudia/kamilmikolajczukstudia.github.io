import React, { useCallback } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import { IPost } from '../Content'
import { GithubAndLiveButtons } from './GithubAndLiveButtons'

const useStyles = makeStyles({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  actions: {
    '& > :last-child': {
      marginLeft: 'auto'
    }
  },
  actionArea: {
    flex: 1,
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'start'
  },
  content: {
    width: '100%'
  }
})

interface IProps extends IPost {
  onOpenDescription?: (id: number) => void
}

export default function Post({
  id,
  img,
  title,
  liveLink,
  codeLink,
  shortDescription,
  onOpenDescription
}: IProps) {
  const classes = useStyles()

  const onDescription = useCallback(() => {
    if (onOpenDescription) onOpenDescription(id)
  }, [onOpenDescription, id])

  return (
    <Card classes={{ root: classes.root }}>
      <CardActionArea onClick={onDescription} classes={{ root: classes.actionArea }}>
        <CardMedia component='img' alt='' height='140' image={img} title={title} />

        <CardContent classes={{ root: classes.content }}>
          <Typography gutterBottom variant='h5' component='h2'>
            {title}
          </Typography>

          {(Array.isArray(shortDescription) ? shortDescription : [shortDescription]).map(
            (text, id) => (
              <Typography key={id} variant='body2' color='textSecondary' component='p'>
                {text}
              </Typography>
            )
          )}
        </CardContent>
      </CardActionArea>

      <CardActions classes={{ root: classes.actions }}>
        <GithubAndLiveButtons codeLink={codeLink} liveLink={liveLink} />

        <Button color='secondary' variant='contained' onClick={onDescription}>
          Opis
        </Button>
      </CardActions>
    </Card>
  )
}
