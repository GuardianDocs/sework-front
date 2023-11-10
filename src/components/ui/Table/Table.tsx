import styles from './Table.module.scss';

interface TableProps {
  children: React.ReactNode;
}

interface TableHeadProps {
  required?: boolean;
}

interface TableRowProps {
  draggable?: boolean;
  onDragStart?: React.DragEventHandler<HTMLTableRowElement>;
  onDragOver?: React.DragEventHandler<HTMLTableRowElement>;
  onDrop?: React.DragEventHandler<HTMLTableRowElement>;
}

const Table = ({ children }: TableProps) => {
  return <table className={styles.table}>{children}</table>;
};

const TableHead = ({ children }: TableProps) => {
  return <thead className={styles.thead}>{children}</thead>;
};

const TableBody = ({ children }: TableProps) => {
  return <tbody className={styles.tbody}>{children}</tbody>;
};

const TableRow = ({ children, draggable, onDragStart, onDragOver, onDrop }: TableProps & TableRowProps) => {
  return (
    <tr className={styles.tr} draggable={draggable} onDragStart={onDragStart} onDragOver={onDragOver} onDrop={onDrop}>
      {children}
    </tr>
  );
};

const TableHeader = ({ children, required }: TableProps & TableHeadProps) => {
  return (
    <th className={styles.th}>
      {children}
      {required && <span className={styles.required}>*</span>}
    </th>
  );
};

const TableCell = ({ children }: TableProps) => {
  return <td className={styles.td}>{children}</td>;
};

Table.Head = TableHead;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Header = TableHeader;
Table.Cell = TableCell;

export default Table;
