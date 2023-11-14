import EtcIcon from '../Icon/EtcIcon/EtcIcon';
import styles from './Table.module.scss';

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  children: React.ReactNode;
}

interface TableHeadProps extends React.HTMLAttributes<HTMLTableHeaderCellElement> {
  children: React.ReactNode;
  required?: boolean;
}

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  draggable?: boolean;
  onDragStart?: React.DragEventHandler<HTMLTableRowElement>;
  onDragOver?: React.DragEventHandler<HTMLTableRowElement>;
  onDrop?: React.DragEventHandler<HTMLTableRowElement>;
}

const Table = ({ children }: TableProps) => {
  return <table className={styles.table}>{children}</table>;
};

const TableHead = ({ children }: React.HTMLAttributes<HTMLTableSectionElement>) => {
  return <thead className={styles.thead}>{children}</thead>;
};

const TableHeader = ({ children, required, ...props }: TableHeadProps) => {
  return (
    <th className={styles.th} {...props}>
      <div className="flex">
        {children}
        {required && <EtcIcon icon="essential-mark" />}
      </div>
    </th>
  );
};

const TableBody = ({ children }: React.HTMLAttributes<HTMLTableSectionElement>) => {
  return <tbody className={styles.tbody}>{children}</tbody>;
};

const TableRow = ({ children, draggable, onDragStart, onDragOver, onDrop }: TableRowProps) => {
  return (
    <tr className={styles.tr} draggable={draggable} onDragStart={onDragStart} onDragOver={onDragOver} onDrop={onDrop}>
      {children}
    </tr>
  );
};

const TableCell = ({ children, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => {
  return (
    <td className={styles.td} {...props}>
      {children}
    </td>
  );
};

Table.Head = TableHead;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Header = TableHeader;
Table.Cell = TableCell;

export default Table;
