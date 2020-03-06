import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'

import { IPost } from '../Content'
import { GithubAndLiveButtons } from '../Post'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    closeButton: {
      position: 'absolute',
      top: theme.spacing(1),
      right: theme.spacing(1),
      color: theme.palette.grey[500]
    },
    button: {
      marginTop: theme.spacing(2)
    },
    buttonIcon: {
      marginRight: theme.spacing(1.5)
    },
    image: {
      width: '100%',
      marginBottom: theme.spacing(2)
    }
  })
)

interface IProps extends IPost {
  open: boolean
  handleClose: () => void
}

export default function PostDialog({
  open,
  img,
  title,
  codeLink,
  liveLink,
  handleClose,
  longDescription
}: IProps) {
  const classes = useStyles()

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle disableTypography>
        <Typography variant='h6'>{title}</Typography>

        <IconButton
          aria-label='close'
          onClick={handleClose}
          classes={{ root: classes.closeButton }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <img alt='' src={img} title={title} className={classes.image} />

        {longDescription}

        <GithubAndLiveButtons
          codeLink={codeLink}
          liveLink={liveLink}
          classes={{ root: classes.button, icon: classes.buttonIcon }}
        />
      </DialogContent>

      <DialogActions>
        <Button color='secondary' variant='contained' onClick={handleClose}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  )
}
