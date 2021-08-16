

By [Erik Horus](https://github.com/ErikHorus1249)
Date : 12/04/2020
![](https://i.imgur.com/b1b1WRN.jpg)
## Git sử dụng như thế nào ?

### I. Mở đầu : Git và những người bạn.
 - Làm việc với **git** thì có nghĩa bạn sẽ tương tác với 3 khu vực sau :
 	1. **working directory**: nơi bạn làm việc tôi sẽ coi đại diện luôn là **nhà của bạn**.
	2. **stagging area** : nơi chuyển giao giữa **kho** và **nhà** của bạn 
	3. **git repository**: nơi lưu trữ của bạn ( **cái kho** )
- Mỗi khu vực dẽ có một chức năng nhiệm vụ riêng. hãy tìm đọc về chúng tại [git](https://git-scm.com/)
![](https://i.imgur.com/8KzwOMq.png)
 #### 1. Working directory
 - Khi source code của bạn được lưu trong một file làm việc nào đó của bạn,  việc đầu tiên để tạo git **working directory**.
 - Hãy di chuyển tới thư mục đó : với Windows : ```Right click``` chọn ```Git bash here``` đối với Ubuntu  : ```cd /Documents/gitExample/ && git init``` đây là tôi giả sử vùng làm việc của tôi sẽ là file ```gitExample``` đồng thời khởi tạo **working directory** tại đó luôn.
 - Lệnh **init** sẽ khởi tạo vùng làm việc của git (working directory) sau khi thực hiện việc khởi tạo rồi hãy kiêm tra bằng lệnh : ```git status``` câu lệnh kiểm tra tình trạng các file trong working directory có bị thay đổi (modified) hay mới tạo mà cưa được **add** hay không : 
```git init```
- sau khi dùng lệnh **init** bạn có thể thấy đã có một file ẩn được tạo (hidden file) : ```.git``` nó sẽ sử lý mọi thao tác của bạn về git.
	```git status```
- Bạn cũng có thể sửa lại nội dung bằng  Sublime-text 3 bằng lệnh sau :
	```subl .```

 #### 2. Stagging area
- Sau đã "ném" source_code của của mình vào thư mục mà bạn vừa khởi tạo bằng **init** thì bạn cần phải thêm các chúng (add) vào **stagging area** bằng lệnh sau :   
	```git add .```
- Đối với ```add .``` thì nó sẽ chọn toàn bộ những file mới hoặc file bị thay đổi để add vào **stagging area** bạn có thể **add** riêng lẻ bằng lệnh : ```git add <nameOfFile>``` ví dụ : ```git add newContent.md```

 #### 3. Git repository
 - sau khi đã add thì bạn phải đưa source_code hay tài liệu của mình vào nơi lưu trữ cuối cùng đó là **respository** hiểu đơn giản nó giống cái **kho**
 - Sử dụng lệnh : 
	```git commit -m "message"```
- chuyển giao (commit) kèm theo lời nhắn để sau bạn biết mình đã làm những gì. :>
	```git diff```
- Lệnh ```diff``` ở trên là dùng khi bạn muốn xem thay đổi một file đã thay đổi những gì so với trước khi bạn sửa nó ( file này chưa được **add**) ```difference```

### II. Branching và những người bạn

 #### 1. Barching là gì và thao tác với branch. 
 - Khi dùng git bạn sẽ gặp một khái niệm về nhánh (branch) ngay logo của git đã cho ta thấy điều đó. Git được tạo ra để quản lý dự án, tài liệu hay source_code của bạn, nó ghi lại mọi thay đổi, các hoạt động sửa xóa, thêm ...Trong khi bạn muốn sửa gì đó mà không ảnh hưởng đến project hiện tại, bạn thêm thêm tính năng mới mà sợ nó kéo gãy cả một **stabble project** trước đó. Nên **git branch** là để sử lý vấn đề đó. Bạn tạo một **branch** mới để sang đó sửa thêm và xóa mọi thứ mà không ảnh hưởng đến project hiện tại của bạn. Nó gần như dòng thời gian của [Endgame](https://www.marvel.com/movies/avengers-endgame) sử dụng **thuyết đa vũ trụ** vậy. Ở đây bạn có **multi-Branching** :>
 ![](https://i.imgur.com/s2paGh8.png)
 - Để xem bạn đang ở **nhánh** (branch) nào hãy dùng lệnh sau : ```git branch``` nếu bạn ở nhánh chính ```branch master``` thì hãy tạo một nhánh mới để làm việc :
 
	```git checkout -b <nameOfnewBranch>``` ví dụ bạn muốn tạo ra một nhánh để cập nhật nội dung thường xuyên : ```git checkout -b UpdateContent/1```
- Khi bạn muốn đi đến một nhánh nào đó : ```git checkout <nameOfBranch>``` ví dụ : ```git checkout master```

 #### 2. Merging là gì và thao tác với merge
 - Sau khi nhảy qua nhay lại trong **"multi-branching"** bạn nhận thấy cái branch **UpdateContent/1** đã đủ hoàn thiện vậy làm sao để mang những nội dung mới này về **nhánh chính** (branch master) : thì chúng ta đến với người bạn **Merging**  (**xác nhập** :> nghe tiếng Vệt không kêu :>)
 - Hãy nhớ là bạn phải quay trở về **master** thì mới thực hiện merge một cách an toàn nếu làm chiều ngược lại thì **branch master** của bạn sẽ "bay màu".
 	```merging : A <--- B``` => ```checkout A``` => ```merge B```
 - Lệnh merge : ```git merge <nameOfBranch>``` ví dụ sau khi tôi **checkout** về **branch master** : ```git merge UpdateContent/1```

 - Sau khi bạn đã **merge** thì **nhánh** cũ có thể dùng cho việc sau này hoặc bạn hãy **xóa** nó đi, lời khuyên của tôi thì hãy làm sạch nhánh phụ sau mỗi lần sửa đổi để dễ cho việc quản lý : ```git branch -d <nameOfBranch>``` ví dụ : ```git branch -d UpdateContent/1```
 - Dùng lệnh ```git branch``` để kiểm tra .
 
 ### III. Resetting và những người bạn
  #### 1. Khai thác Git_log
  - **git log** sẽ ghi lại nhật kí sử sử **git** của bạn bao gồm thời gian, nội dung thay dổi ... và các thông tin này sẽ được khai thác rất nhiều trong quá trình **backup** hay **reset** những gì mà bạn đã làm bao gồm cả **add** và **commit** ...
  - Làm sao để xem **log** : ```git log```
  - Nội dung của một log cơ bản sẽ có như sau :
  	```commit 4850f2fde824e1454b81add0466d2e145c910241 (HEAD -> master, origin/master, test/pushBranch)```
	   ```Author: Erik_Horus <tuananh1421999@gmail.com>
 	   Date:   Fri Apr 10 09:31:25 2020 +0700

    	   update```
 - Thông tin : ID của commit, Branch hiện tại của commit, tác giả, thời gian commit, nội dung của message.
 - Ngoài ra khi bạn muốn xem log bằng giao diện đồ họa : ```gitk``` nếu ```bash: gitk: command not found``` hãy cài nó : ``` sudo apt install gitk```
 
 #### 2. Resetting và các thao tác với reset (git reset to undo commit)
 - Reset sử dụng nhằm thay đổi những gì bạn hối tiếc, những thao tác không như mong muốn (hiểu đơn giản là vậy)
 	```git reset [option] <commit ID>```
 - [options] : ```--soft``` : loại bỏ cmmit hiện tại quay lại commit trước tức là coi như bạn chưa commit gì mới.
 	       ```--mixed```: nó tương tự như  ```soft```
 	       => cả hai option trên thì các nội dung modified vẫn còn nguyên ở dạng chưa **add**.
 - Người anh em họ của **reset** là **revert** hãy thận trọng khi sử dụng revert tại vì revert sẽ xóa tất cả **modied file**.
 	```git revert <commit ID>```
 

 ### IV. Github 
  #### 1. Giới thiệu:
![](https://i.imgur.com/BGVBXnV.jpg)
  - Github là nơi bạn lưu trữ  **repository** nó giống GG Driver quản lý trực tuyến các tài nguyên của bạn. Nhưng nó có nhiều tính năng đặc biệt dành cho các hoạt động **open Source**. Bạn có thể đóng góp vào một **project** của ai đó và ngược lại nhờ có Github nhiều thứ quan trọng như pull hay clone sẽ được tôi giới thiệu ngay sau đây.
  #### 2. Thao tác với repository trên github
  - Trước tiên là làm sao ném **repositry** của bạn lên đó (github), con đường lên "mây"(cloud) của bạn sẽ như sau :
  	- **Bước 1**: trước tiên hãy tạo một tài khoản github và verify ( khá dễ dàng)
  	- **Bước 2**: tạo một repository và đặt tên cho nó, copy đường link của nó 
  	- **Bước 3**: tại File mà bạn đã commit content của nó rồi, bật Terminal(linux)/ git Command Prompt(Windows) : ```git remote add origin <copiedLink>``` + ```Enter``` sau đó kiểm tra **remote** đã add repository trên github của bạn chưa : ```git remote -v```
  	- **Bước 4**:  bắt đầu **push** : ```git push``` bạn sẽ nhận được thông báo là lần **push** đầu tiên phải dùng lệnh ```git push -u origin master``` để nó **push branch master** của bạn. sau đó nhập vào ```<account>``` và ```<password>``` **github** của bạn. 
  	- **Bước 5**: reload [github](https://github.com/) để xem thành quả của mình.
  
  - Ngoài ra để **push** một branch không phải master dùng lệnh sau :  ```git remote add origin <nameOfBranch>```
 #### 3. Git credential 
 - Git credential : mỗi lần bạn push thông tin đăng nhập lại phải nhập lại khá mất công nên bạn có thể dùng câu lệnh sau để lưu tạm thông tin đăng nhập cho lần push sau, thông tin chỉ được luư tạm thời trong RAM còn lưu trong Mem thì ở dạng **plain Text**
 	- Lệnh ```git config --global credential.helper store``` lưu tại Mem, không nên sử dụng lệnh này vì lý do **bảo mật**.

	- Lệnh ```git config --global credential.helper "cache --timeout=<time>"``` sẽ lưu tạm thời vào RAM và mất sao một khoảng thời gian mà bạn set 
 #### 4. Git Pull và clone
 ![](https://i.imgur.com/GzDxDB7.jpg)
 - Lệnh clone sử dụng khi bạn muốn tham gia vào một project của một ai đó thì bạn clone nó về máy bạn modify theo cách của bạn và bạn pull nó lên để chia sẻ cho người khác xem.
 	- lệnh ```git clone``` và ```git pull ```
 ### Chúc bạn sử dụng Git và Github hiệu quả .
##### Credit :
- refence : 
	- [Git](https://git-scm.com/docs/gittutorial)
	- [GithubTurtorial](https://guides.github.com/activities/hello-world/)
	- [author](https://github.com/ErikHorus1249)




















