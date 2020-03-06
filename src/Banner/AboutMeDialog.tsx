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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    closeButton: {
      position: 'absolute',
      top: theme.spacing(1),
      right: theme.spacing(1),
      color: theme.palette.grey[500]
    },
    buttonIcon: {
      marginRight: theme.spacing(1.5)
    }
  })
)

interface IProps {
  open: boolean
  handleClose: () => void
}

export default function AboutMeDialog({ open, handleClose }: IProps) {
  const classes = useStyles()

  return (
    <Dialog onClose={handleClose} open={open} maxWidth='lg'>
      <DialogTitle disableTypography>
        <Typography variant='h6'>O mnie</Typography>

        <IconButton
          aria-label='close'
          onClick={handleClose}
          classes={{ root: classes.closeButton }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>ala ma kota</DialogContent>

      <DialogActions>
        <Button color='secondary' variant='contained' onClick={handleClose}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  )
}
