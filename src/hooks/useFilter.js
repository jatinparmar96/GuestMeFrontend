import { useRecoilState } from 'recoil';

const useFilter = ({ selector }) => {
  const [filter, setFilter] = useRecoilState(selector);

  if (selector.key !== 'priceFilterAtom') {
    const handleChange = ({ target: { value, checked } }) => {
      if (checked) {
        const newFilter = [...filter, value];
        setFilter(newFilter);
      } else {
        const newFilter = filter.filter((val) => val !== value);
        setFilter(newFilter);
      }
    };
    return [filter, handleChange];
  } else {
    const handlePriceChange = (e) => {
      setFilter(e);
    };
    return [filter, handlePriceChange];
  }
};

export default useFilter;
