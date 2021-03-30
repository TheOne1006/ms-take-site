import * as React from 'react';
import { Children, Fragment, cloneElement, memo } from 'react';
import BookIcon from '@material-ui/icons/Book';
import { Box, Chip, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import lodashGet from 'lodash/get';
import jsonExport from 'jsonexport/dist';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import {
    BooleanField,
    BulkDeleteButton,
    BulkExportButton,
    ChipField,
    Datagrid,
    DateField,
    downloadCSV,
    EditButton,
    Filter,
    List,
    FilterList,
    NumberField,
    ReferenceArrayField,
    SearchInput,
    ShowButton,
    SimpleList,
    SingleFieldList,
    FilterListItem,
    TextField,
    TextInput,
    useTranslate,
    ReferenceField,
    ReferenceManyField,
} from 'react-admin'; // eslint-disable-line import/no-unresolved

import Aside from './Aside';

export const PostIcon = BookIcon;

const useQuickFilterStyles = makeStyles(theme => ({
    chip: {
        marginBottom: theme.spacing(1),
    },
}));
const QuickFilter = ({ label }) => {
    const translate = useTranslate();
    const classes = useQuickFilterStyles();
    return <Chip className={classes.chip} label={translate(label)} />;
};

const usePostListActionToolbarStyles = makeStyles({
    toolbar: {
        alignItems: 'center',
        display: 'flex',
        marginTop: -1,
        marginBottom: -1,
    },
});

const PostListActionToolbar = ({ children, ...props }) => {
    const classes = usePostListActionToolbarStyles();
    return (
        <div className={classes.toolbar}>
            {Children.map(children, button => cloneElement(button, props))}
        </div>
    );
};

const rowClick = (id, basePath, record) => {
    if (record.commentable) {
        return 'edit';
    }

    return 'show';
};

const NearlyMessagePanel = (props) => {
  return (
    <ReferenceManyField source="phoneCode" label="info" reference="messages" target="phoneCode" sort={{ field: 'updatedAt', order: 'DESC' }}>
      <Datagrid>
        <TextField source="phoneCode" />
        <TextField source="fromFlag" />
        <TextField source="areaPrefix" />
        <TextField source="phoneCode" />
      </Datagrid>
    </ReferenceManyField>
)
};


const PhoneList = props => {

    return (
      <List
        {...props}
        aside={<Aside />}
        perPage={25}
        sort={{ field: 'updatedAt', order: 'DESC' }}
      >
        <Datagrid
          // isRowExpandable={() => false}
          expand={<NearlyMessagePanel />}
        >
          {/* <TextField source="id" /> */}
          <TextField source="phoneCode" />
          <TextField source="areaPrefix" />
          <DateField source="activeDate" />
          <TextField source="site" />
          <TextField source="siteUrl" />
        </Datagrid>
      </List>

    );
};

export default PhoneList;
