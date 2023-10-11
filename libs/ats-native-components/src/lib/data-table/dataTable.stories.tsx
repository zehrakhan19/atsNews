import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { DataTable, DataTableProps } from './dataTable';

const props: DataTableProps = {};

storiesOf('DataTable', module).add('Primary', () => <DataTable {...props} />);
