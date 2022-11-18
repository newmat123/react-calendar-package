import './Calendar.css';
import React from 'react'

function Calendar() {
  return (
    <div className="Calendar">
      <div className="Container">
        <div className="Calendar-header">
          <h2 className="year">
            2021
          </h2>
          <h1 className="date">
            Sat, Sep 17
          </h1>
        </div>
        

        <div className="Calendar-box">
          <div className="Calendar-month-select">
            <button className="Calendar-month-select-btl bnt">&lt;</button>
            <button className="Calendar-month-select-btr bnt">&gt;</button>
          </div>
          <div>
            <ul className="weekdays">
              <li>Mo</li>
              <li>Tu</li>
              <li>We</li>
              <li>Th</li>
              <li>Fr</li>
              <li>Sa</li>
              <li>Su</li>
            </ul>
            
            <ul className="days">  
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li><span className="active">10</span></li>
              <li>11</li>
              <li>12</li>
              <li>13</li>
              <li>14</li>
              <li>15</li>
              <li>16</li>
              <li>17</li>
              <li>18</li>
              <li>19</li>
              <li>20</li>
              <li>21</li>
              <li>22</li>
              <li>23</li>
              <li>24</li>
              <li>25</li>
              <li>26</li>
              <li>27</li>
              <li>28</li>
              <li>29</li>
              <li>30</li>
              <li>31</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Calendar;


{/* <div className="Calender">
  <div className="Calender-container">
    <div className="Calender-box">
      <div className="month">      
        <ul>
          <li className="prev">&#10094;</li>
          <li className="next">&#10095;</li>
          <li className="style">
            2021
          </li>
        </ul>
      </div>
      
      <ul className="weekdays">
        <li>Mo</li>
        <li>Tu</li>
        <li>We</li>
        <li>Th</li>
        <li>Fr</li>
        <li>Sa</li>
        <li>Su</li>
      </ul>
      
      <ul className="days">  
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li><span className="active">10</span></li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
        <li>31</li>
      </ul>
    </div>
  </div>
</div> */}