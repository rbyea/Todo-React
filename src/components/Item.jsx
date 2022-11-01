import React from 'react';
import { IconButton, Checkbox, ListItem, Typography } from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useDispatch } from 'react-redux';
import { removeTask, changeCheckbox } from '../redux/slice/taskSlice';

export const Item = ({ ...props }) => {
  const dispatch = useDispatch();

  const btnDelete = (id) => {
    if (window.confirm('Действительно хотите удалить таск?')) {
      dispatch(removeTask(id));
    }
  }

  return (
    <ListItem  className={props.tab === 0 ? '' : props.tab === 1 ? 'input-completed' : props.tab === 2 ? 'input-chagrin' : ''} data-obj={props.completed}>
      <div className="d-flex item">
        <Checkbox onChange={(e) => dispatch(changeCheckbox(props.element))}  checked={props.completed} icon={<RadioButtonUncheckedIcon />} checkedIcon={<CheckCircleIcon />} />
        <Typography className="item-text">{props.text}</Typography>
        <div className="item-buttons d-flex">
          {/* <IconButton>
            <EditIcon style={{ fontSize: 20 }} />
          </IconButton> */}
          <IconButton onClick={(e) => btnDelete(props.element)}>
            <DeleteOutlineIcon style={{ fontSize: 20 }} />
          </IconButton>
        </div>
      </div>
    </ListItem>
  );
};
