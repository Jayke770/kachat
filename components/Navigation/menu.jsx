import { Popover, List, ListItem } from "konsta/react"

export default function Menu({ data, setmenu }) {
    return (
        <Popover
            target={data.target}
            opened={data.opened}
            onBackdropClick={() => setmenu({ target: undefined, opened: false })}>
            <List
                margin="m-0"
                hairlines={false}>
            </List>
        </Popover>
    )
}