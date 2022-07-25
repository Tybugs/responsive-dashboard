// assets
import { IconUserX } from '@tabler/icons';

// constant
const icons = {
    IconUserX
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'control-panel',
    title: 'Control Panel',
    type: 'group',
    children: [
        {
            id: 'developer-settings',
            title: 'Developer Settings',
            type: 'item',
            url: '',
            icon: icons.IconUserX
        }
    ]
};

export default pages;
