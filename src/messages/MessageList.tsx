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

const MessageList = props => {

    return (
      <List
        aside={<Aside />}
        {...props}
        sort={{ field: 'updatedAt', order: 'DESC' }}
      >
        <Datagrid optimized >
          {/* <TextField source="id" /> */}
          <TextField source="phoneCode" />
          <TextField source="fromFlag" />
          <TextField source="areaPrefix" />
          <TextField source="phoneCode" />
          {/* <DateField source="date" /> */}
          <TextField source="code" />
          <TextField source="text" />
          <DateField source="receiveTime" />
          <TextField source="fromPhoneCode" />
        </Datagrid>
      </List>

    );
};

export default MessageList;
