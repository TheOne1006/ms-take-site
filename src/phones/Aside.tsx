import * as React from 'react';
import { FC } from 'react';
import { Card as MuiCard, CardContent, withStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import LocalOfferIcon from '@material-ui/icons/LocalOfferOutlined';

import {
  FilterList,
  FilterListItem,
  TextField,
  FilterLiveSearch,
} from 'react-admin';


const Card = withStyles(theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      order: -1, // display on the left rather than on the right of the list
      width: '15em',
      marginRight: '1em',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}))(MuiCard)

const Aside: FC = () => {
  return (
    <Card>
      <CardContent>
        <FilterLiveSearch source='phoneCodeLike' />
        <FilterList
          label="resources.phones.filters.area"
          icon={<LocalOfferIcon />}
        >
          <FilterListItem
            label="resources.phones.filters.area_cn"
            value={{
              areaPrefix: 'cn',
            }}
          />
          <FilterListItem
            label="resources.phones.filters.area_hk"
            value={{
              areaPrefix: 'hk',
            }}
          />
        </FilterList>
        <FilterList
          label="resources.phones.filters.activeDays"
          icon={<LocalOfferIcon />}
        >
          <FilterListItem
            label="resources.phones.filters.last_1_day"
            value={{
              activeDays: 1,
            }}
          />
        </FilterList>
      </CardContent>
    </Card>
  );
};

export default Aside;
