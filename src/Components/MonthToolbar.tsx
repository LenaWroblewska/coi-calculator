import logo from './logo.svg';
import './MonthToolbar.css';

export function MonthToolbar() {
    const months = ["March 24", "April 24", "May 24"];
    return (
      <div className='month-toolbar'>
        {
            months.map(function(data) {
                return (
                    <div className='month-tab'>
                        {data}
                    </div>
                )
            })
        }
        <div className='month-tab'>
            + Add
        </div>
      </div>
    );
  }