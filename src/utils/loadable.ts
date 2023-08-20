import baseLoadable from '@loadable/component';

const loadable = (
  dynamicImport: () => Promise<{
    default: React.FunctionComponent;
  }>
) => baseLoadable(dynamicImport);

export default loadable;
