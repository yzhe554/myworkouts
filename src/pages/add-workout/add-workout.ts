import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { WorkoutService } from '../../app/services/workout.service';
import { WorkoutsPage } from '../workouts/workouts';

@Component({
  selector: 'page-add-workout',
  templateUrl: 'add-workout.html'
})
export class AddWorkoutPage {
  
  public title: String;
  public note: String;
  public type: String;
  public result: any;

  constructor(public navCtrl: NavController, private workoutService: WorkoutService) {
  }

  onSubmit() {
    var workout = {
        title: this.title,
        note: this.note,
        type: this.type
    }

    // Add workout
    this.workoutService.addWorkout(workout).subscribe(data => {
        this.result = data;
        console.log('result:' + this.result);
        this.navCtrl.push(WorkoutsPage);
    });
    // this.workoutService.addWorkout(workout)
    //   .then(data => {
    //     this.result = data;
    //     this.navCtrl.push(WorkoutsPage);
    //   });
    

    
  }

}