import style from './EmptyList.module.scss';

const EmptyList = () => {
  return (
    <div className={style.emptyList}>
      <p>No Items here</p>
    </div>
  );
};

export default EmptyList;
