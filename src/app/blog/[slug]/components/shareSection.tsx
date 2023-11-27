import Pills from "@/components/custom/pills";
export default function ShareSection() {
  return (
    <>
      <div>
        <div>
          Liked what you read?
          <div>
            <span>
              <span>share it</span> with your friendsshare it
            </span>
            with your friends
          </div>
        </div>
        <Pills intent="All" size="regularFilterPills">
          Copy Link
        </Pills>
      </div>
    </>
  );
}
