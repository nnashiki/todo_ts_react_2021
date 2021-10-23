import { Component, ReactElement } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import * as React from "react";

type Task = {
    checked: boolean;
    name: string;
};


type State = { tasks: Task[] };
type Props = {
    tasks: Task[]
}

class NewTask extends Component<unknown, State> {
    constructor(props: Props) {
        super(props);
        this.state = { tasks: [] };
    }

    increment(taskname:string|null): void {
        if (taskname == null) {
            throw Error
        }
        this.setState((state) => (
            { tasks: [...state.tasks,{"checked" : false, "name": taskname} ]}
        ));
    }

    render(): ReactElement {
        let {tasks} = this.state;

        return (
            <>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="new task" variant="outlined" />
                    <Button onClick={() => {
                        let target = document.getElementById("outlined-basic")
                        if (target) {
                            this.increment((target as HTMLInputElement).value)
                        }
                        }
                    }
                        >
                        追加
                    </Button>
                </Box>
                <FormGroup>
                    {tasks.map((task) => (
                        < FormControlLabel control={<Checkbox/>} label={task.name}/>
                    ))
                    }
                </FormGroup>
            </>
        );
    }
}

export default NewTask;
