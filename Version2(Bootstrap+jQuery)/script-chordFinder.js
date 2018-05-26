function findChord(n, c1, c2){
				
				var i=0; j=0;
				chordParts = ['first', 'third', 'fifth', 'seventh'];
				
				/*finding the notes of the chord:*/
				while (n[i] != c1){
					i++;
				}
				chordParts[0] = n[i];
				j=i;

				if (c2 == 'Major' || c2 == '7' || c2 == 'maj7'){
					if (i+4 > 11){
						i = (i+4)%11 - 1;
					}else{
						i=i+4;
					}
					chordParts[1] = n[i];

					if (i+3 > 11){
						i = (i+3)%11 - 1;
					}else{
						i=i+3;
					}
					chordParts[2] = n[i];


				}else{
					if (i+3 > 11){
						i = (i+3)%11 - 1;
					}else{
						i=i+3;
					}
					chordParts[1] = n[i];

					if (i+4 > 11){
						i = (i+4)%11 - 1;
					}else{
						i=i+4;
					}
					chordParts[2] = n[i];

				}

				if (c2 == '7' || c2 == 'm7'){
					if (j+10 > 11){
						j = (j+10)%11 - 1;
					}else{
						j=j+10;
					}
					chordParts[3] = n[j];
				}

				if (c2 == 'maj7'){
					if (j+11 > 11){
						j = (j+11)%11 - 1;
					}else{
						j=j+11;
					}
					chordParts[3] = n[j];
				}

				return chordParts;
				
		}

		function placeDot (s, cp, d, p){


			var j=0;
			var intervals = [0, 360, 418, 470, 518, 566, 610, 652, 690, 730, 764, 798];

			for (i=0; i<p; i++){
				while (s[j][0] != cp[0] && s[j][0] != cp[1]&& s[j][0] != cp[2] && s[j][0] != cp[3]){
						j++;
				}
					if (j != 0){

						d.style.display = 'block'; 
						d.style.left = intervals[j] + 'px';
						d.style.bottom = s[j][1] + 'px';
						d.style.opacity = 1.0;

					}else {
						d.style.display = 'block';
						d.style.opacity = 0.0;

					}
				j++;
			}

		}

		function findFret (d){

			var j=0;
			var intervals = [0, 360, 418, 470, 518, 566, 610, 652, 690, 730, 764, 798];

			
			while (d != intervals[j]){
						j++;
			}
				
			return j;
			

		}

		

		function displayImg(){

			
			var notes = ['A', 'Bb', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
			var string1 = [['A', 0], ['Bb', 154], ['B', 154], ['C', 154], ['C#', 154], ['D', 156], ['D#', 156], ['E', 158], ['F', 158], ['F#', 159], ['G', 159], ['G#', 160]];
			var string2 = [['E', 0], ['F', 150], ['F#', 150], ['G', 150], ['G#', 150],['A', 150], ['Bb', 150], ['B', 150], ['C', 150], ['C#', 150], ['D', 150], ['D#', 150]];
			var string3 = [['C', 0], ['C#', 146], ['D', 146], ['D#', 146], ['E', 146], ['F', 146], ['F#', 146], ['G', 146], ['G#', 146], ['A', 146], ['Bb', 146], ['B', 146]];
			var string4 = [['G', 0], ['G#', 142], ['A', 142], ['Bb', 142], ['B', 142], ['C', 140], ['C#', 140], ['D', 138], ['D#', 138], ['E', 137], ['F', 137], ['F#', 136]];

			var chord1 = document.getElementById('chordSelect1').value;
			var chord2 = document.getElementById('chordSelect2').value;


			var dot1 =  document.getElementById('greenDot1');
			var dot2 =  document.getElementById('greenDot2');
			var dot3 =  document.getElementById('greenDot3');
			var dot4 =  document.getElementById('greenDot4');
			
			var chordparts = findChord(notes, chord1, chord2);


			var p = Number(document.getElementById('position').value);
			
			/*alert ('P is: ' + p);*/
			placeDot (string1, chordparts, dot1, p);
			placeDot (string2, chordparts, dot2, p);
			placeDot (string3, chordparts, dot3, p);
			placeDot (string4, chordparts, dot4, p);


		}

		function showChordSelect2(){
			document.getElementById('Major').style.display = 'inline';
			document.getElementById('Minor').style.display = 'inline';
			document.getElementById('Seven').style.display = 'inline';
			document.getElementById('m7').style.display = 'inline';
			document.getElementById('maj7').style.display = 'inline';
		}
		
		function resetChord2(){
			document.getElementById('chordSelect2').options[0].selected = 'selected';
			document.getElementById('greenDot1').style.display = 'none';
			document.getElementById('greenDot2').style.display = 'none';
			document.getElementById('greenDot3').style.display = 'none';
			document.getElementById('greenDot4').style.display = 'none';			
		}


		function resetPosition(){
			document.getElementById('position').options[0].selected = 'selected';
		}
		
