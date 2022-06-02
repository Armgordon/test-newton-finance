import { useTypedSelector } from '../../hooks/useTypedSelector';

export const useAppStateSelector = () => useTypedSelector((state) => state.main);
