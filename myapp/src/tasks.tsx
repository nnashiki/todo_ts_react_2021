import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {VFC} from 'react';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import {Button} from "@mui/material";


export type Task = {
    checked: boolean;
    name: string;
};

type Props = {
    tasks: Task[]
}


const Tasks: VFC<Props> = (props: Props) => {
    let {tasks} = props;

    return (
        <FormGroup>
            {tasks.map((task) => (
                < FormControlLabel control={<Checkbox/>} label={task.name}/>
            ))
            }
        </FormGroup>
    );
}

export default Tasks